const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return import.meta.env[key] || ''
}

export const config = {
  API_URL: getEnvVar('VITE_APP_API_URL'),
  REQUEST_TIMEOUT: 5000,
} as const

export const enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}

export const enum SimulatorView {
  Instruction = 'Instruction',
  TypedText = 'TypedText',
}
