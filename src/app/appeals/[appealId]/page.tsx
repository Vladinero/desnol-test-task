interface IAppealProps {
  params: {
    appealId: number
  }
}

export default function Appeal({params}: IAppealProps) {
  const {appealId} = params
  return (
    <div>
      {`Appeal ${appealId} page`}
    </div>
  )
}
