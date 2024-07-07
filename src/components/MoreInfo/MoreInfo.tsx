'use client';

import {useState} from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";

interface IMoreInfoProps {
  moreInfo: string
}
export const MoreInfo = ({moreInfo}: IMoreInfoProps) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const handleShowMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }
  return (
    <Stack direction="column" gap={4}>
      <Button size="small" variant="contained" onClick={handleShowMoreInfo}>
        Дополнительная информация
      </Button>
      {showMoreInfo && <Typography variant='body1'>{moreInfo}</Typography>}
    </Stack>
  )
}
