export type RulesType = {
  [key: string]: FormRules;
};
type RequiredRule = {
  value: boolean;
  message: string;
};

type TypeRule = {
  value: string | RegExp;
  message: string;
};

type FormRules = {
  required?: RequiredRule;
  type?: TypeRule;
  pattern?: TypeRule;
  whitespace?: boolean;
};
