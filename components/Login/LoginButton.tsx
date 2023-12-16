import { SimpleButton } from "../Button/SimpleButton";

const DISCORD_URL =
  "https://discord.com/api/oauth2/authorize?client_id=1184849599979073638&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fdiscord%2Fcallback&scope=identify";

export const LoginButton = () => {
  return (
    <SimpleButton
      label="Login with Discord"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = DISCORD_URL;
      }}
    />
  );
};
