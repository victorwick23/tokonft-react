
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import profile from './profile'
import Appnft from './app'
import Staking from './staking'
import Detailnft from './detailnft'
import StakingPool from './stakingpool'
import AddNFt from './addnft'




export default function index() {
  return (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/app" component={Appnft}/>
          <Route exact path="/staking" component={Staking}/>
          <Route exact path="/profile/add-nft" component={AddNFt}/>
          <Route exact path="/profile" component={profile}/>
          <Route exact path="/detail-nft" component={Detailnft}/>
          <Route exact path="/staking-pool" component={StakingPool}/>
      </Switch>
  )
}
