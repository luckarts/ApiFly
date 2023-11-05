import { RulesType } from './type';
export const rules: RulesType = {
  email: {
    required: {
      value: true,
      message: 'email require'
    },
    type: {
      value: 'email',
      message: 'type email required'
    },
    whitespace: false
  },

  password: {
    required: {
      value: true,
      message: 'password require'
    },
    whitespace: true,
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
      message: 'password too low'
    }
  },
  username: {
    required: {
      value: true,
      message: 'username require'
    },
    whitespace: false
  }
};
