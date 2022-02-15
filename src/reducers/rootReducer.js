import combineReducers from 'react-combine-reducers'

import { searchReducer } from './searchReducer'
import { followReducer } from './followReducer'
import { tagsReducer } from './tagsReducer'

const searchInitState = {
  loading: false,
  data: null,
  fail: null,
}

const followInitState = {
  followers: {
    loading: false,
    data: null,
    fail: null,
  },
  following: {
    loading: false,
    data: null,
    fail: null,
  },
}

const tagsInitState = {
  loading: false,
  data: null,
  fail: null,
}

const [rootReducer, initialStateCombined] = combineReducers({
  search: [searchReducer, searchInitState],
  follow: [followReducer, followInitState],
  tags: [tagsReducer, tagsInitState],
})

export { rootReducer, initialStateCombined }
