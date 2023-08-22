import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { routes } from "../../../router/index";
import { useNavigate } from "react-router-dom";
import { GitHubUser } from "./model";

export function MemberDetailComponent({
  memberData,
}: {
  memberData: GitHubUser;
}) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(routes.list);
  }

  return (
    <div>
      {memberData ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={memberData.avatar_url}
            alt={`Avatar de ${memberData.login}`}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {memberData.login}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 2 }}
            >
              Id: {memberData.id}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              Repositorios Públicos: {memberData.public_repos}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              Followers: {memberData.followers}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              Following: {memberData.following}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              Url: <a href={memberData.html_url}>{memberData.url}</a>
            </Typography>
            <Button
              onClick={handleNavigation}
              variant="contained"
              sx={{ marginTop: 2 }}
            >
              list
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Cargando...
        </Typography>
      )}
    </div>
  );
}
