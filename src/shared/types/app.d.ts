declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type RootState = import('../src/app/appStore').RootState
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type AppDispatch = import('../src/app/appStore').AppDispatch
}

export {}
