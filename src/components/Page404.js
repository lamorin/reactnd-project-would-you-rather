import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 575,
    height: '50vh',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function Page404() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          404
        </Typography>

        <Typography variant="h5" style={{ marginTop: '2em' }} component="h2">
          Question not found <span>:(</span>
        </Typography>
      </CardContent>
    </Card>
  )
}
