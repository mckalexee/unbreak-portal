import { FOO_ACTION } from '@actions/action-types';

export function selectFoo(value: string) {
  return {
    type: FOO_ACTION,
    payload: value
  };
}
