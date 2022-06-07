import { createSlice } from '@reduxjs/toolkit'
import { WSTORAGE_KEY } from '../../utils/constants'
import { checkNull, getWStorage, setWStorage } from '../../utils/js-func'

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        data: {},
        name: 'My Team'
    },
    reducers: {
        initTeam: (state, action) => {
            state.data = action.payload
            setWStorage(WSTORAGE_KEY.team, action.payload)
        },
        updateTeamName: (state, action) => {
            return {
                ...state,
                name: action.payload
            }
        },
        updatePlayer: (state, action) => {
            let result = Object.assign({}, state.data)
            result[action.payload.id] = action.payload
            return {
                ...state,
                data: JSON.parse(JSON.stringify(result))
            }
        },
        deletePlayerById: (state, action) => {
            let result = Object.assign({}, state.data)
            delete result[action.payload]
            return {
                ...state,
                data: JSON.parse(JSON.stringify(result))
            }
        },
        resetTeamFromWStorage: (state) => {
            let result = getWStorage(WSTORAGE_KEY.team)
            if (checkNull(result)) return {
                ...state,
                data: {}
            }
            else {
                return {
                    ...state,
                    data: JSON.parse(JSON.stringify(result))
                }
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    initTeam,
    updateTeamName,
    updatePlayer,
    deletePlayerById,
    resetTeamFromWStorage
} = teamSlice.actions

export default teamSlice.reducer