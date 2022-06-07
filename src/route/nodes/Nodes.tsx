import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { nodeSelectors } from '~store/selectors'
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NodeTable } from './components/NodeTable'
import { NetworkSelect } from '../../components/NetworkSelect'
import { Search, Sync } from '@mui/icons-material'
import { NetworkNodes } from './netid/NetworkNodes'
import { Tablefilter } from '../networks/components/Tablefilter'

export const Nodes: React.FC = () => {
  const { path } = useRouteMatch()
  const { t } = useTranslation()
  const listOfNodes = useSelector(nodeSelectors.getNodes)
  const [filterNodes, setFilterNodes] = React.useState(listOfNodes)
  const history = useHistory()

  const syncNodes = () => {
    history.push('/nodes')
  }

  const handleFilter = (event: { target: { value: string } }) => {
    const { value } = event.target
    const searchTerm = value.trim()
    if (!!!searchTerm) {
      setFilterNodes(listOfNodes)
    } else {
      setFilterNodes(
        listOfNodes.filter((node) =>
          `${node.name}${node.address}${node.network}`.includes(searchTerm)
        )
      )
    }
  }

  return (
    <Container>
      <Switch>
        <Route exact path={path}>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={3}>
              <h2>{t('node.nodes')}</h2>
            </Grid>
            <Grid item xs={7}>
              <Grid container justifyContent="space-around" alignItems="center">
                <Grid item xs={4}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                    label={`${t('common.search')} ${t('node.nodes')}`}
                    onChange={handleFilter}
                  />
                </Grid>
                <Grid item xs={3}>
                  <NetworkSelect />
                </Grid>
                <Grid item xs={1}>
                  <Tooltip title={t('node.sync') as string} placement="top">
                    <IconButton color="primary" onClick={syncNodes}>
                      <Sync />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={3}>
                  <Tablefilter />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <NodeTable
            nodes={
              filterNodes.length && filterNodes.length < listOfNodes.length
                ? filterNodes
                : listOfNodes
            }
          />
        </Route>

        <Route path={`${path}/:netid`}>
          <NetworkNodes />
        </Route>
      </Switch>
    </Container>
  )
}
