from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken, OutstandingToken

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise e

        old_refresh_token = request.data.get('refresh')

        if old_refresh_token:
            # Manually add the refresh token to the blacklist
            OutstandingToken.objects.filter(token=old_refresh_token).delete()

        new_refresh_token = RefreshToken.for_user(serializer.validated_data['user'])

        response_data = {
            "access": str(serializer.validated_data['access']),
            "refresh": str(new_refresh_token),
        }

        return Response(response_data)
