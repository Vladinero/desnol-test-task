import * as React from 'react';

import {IDataModel} from "@/models";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/system";
import Badge from "@mui/material/Badge";

import {MoreInfo} from "@/components/MoreInfo";

interface IDetailCardProps {
  info: IDataModel
}

export default function DetailCard({info}: IDetailCardProps) {
  const {number, createdAt, theme, description, status, deadline, decision} = info
  return (
    <Card sx={{minWidth: 275}}>
      <CardContent>
        <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1}}>
          <Stack direction="column">
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
              {`Обращение № ${number} от ${createdAt}`}
            </Typography>
            <Typography variant="h6" sx={{fontWeight: 700}}>
              {theme}
            </Typography>
            <Typography variant="body2" sx={{mb: 1.5}} color="text.secondary">
              {description}
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography sx={{fontSize: 14}} color="text.secondary" mb={4}>
              <Badge color="secondary" variant="dot" sx={{marginRight: 1}}/>
              {status}
            </Typography>
            <Typography variant="body1">
              Крайний срок:
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{fontSize: 16, fontWeight: 700}}>
              {deadline}
            </Typography>
            <Typography variant="body1" component="div">
              Решение:
            </Typography>
            <Typography variant="body2" sx={{mb: 1.5}} color="text.secondary">
              {decision}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <MoreInfo moreInfo={'Дополнительная информация'}/>
      </CardActions>
    </Card>
  );
}
