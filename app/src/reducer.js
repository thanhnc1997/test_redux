import { TOGGLE_OPTION, LOAD_INITIAL_STATE } from './action_type';

const initialState = [
  {
    id: 1,
    name: 'canceled',
    check: false
  },
  {
    id: 2,
    name: 'draft',
    check: true
  },
  {
    id: 3,
    name: 'with pickup',
    check: true
  },
  {
    id: 4,
    name: 'printed',
    check: true
  }
];


function storeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_OPTION: {
      const array = JSON.parse(JSON.stringify(state));
      array.map(item => {
        if (item.id === payload.id) {
          item.check = !payload.check;
        }
      });
      return array;
    }
    case LOAD_INITIAL_STATE: {
      state = [
        {
          id: 1,
          name: 'canceled',
          check: false
        },
        {
          id: 2,
          name: 'draft',
          check: true
        },
        {
          id: 3,
          name: 'with pickup',
          check: true
        },
        {
          id: 4,
          name: 'printed',
          check: true
        }
      ];
      return state;
    }
    default:
      return state;
  }
}

export default storeReducer;