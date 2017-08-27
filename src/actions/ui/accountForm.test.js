import {
  changeName,
  changeGroup,
  changeCurrencyCheckbox,
  changeCurrencyBalance
} from './accountForm'

it('creates CHANGE_NAME action', () => {
  expect(changeName('foo')).toEqual({ type: 'CHANGE_NAME', payload: 'foo' })
})

it('creates CHANGE_GROUP action', () => {
  expect(changeGroup('bar')).toEqual({ type: 'CHANGE_GROUP', payload: 'bar' })
})

it('creates CHANGE_CURRENCY_CHECKBOX action', () => {
  expect(changeCurrencyCheckbox('USD', true)).toEqual({
    type: 'CHANGE_CURRENCY_CHECKBOX',
    payload: {
      code: 'USD',
      isChecked: true
    }
  })
})

it('creates CHANGE_CURRENCY_BALANCE action', () => {
  expect(changeCurrencyBalance('USD', 199)).toEqual({
    type: 'CHANGE_CURRENCY_BALANCE',
    payload: {
      code: 'USD',
      balance: 199
    }
  })
})
