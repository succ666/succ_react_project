import Counter from '../components/counter'
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction
} from '../redux/actions/counter_action'

import {connect} from 'react-redux'

export default connect(
  state => ({count:state.count}), //这里的state时store所管理的哪个“超级大的”对象，里面包含所有的状态
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction}
  )(Counter)