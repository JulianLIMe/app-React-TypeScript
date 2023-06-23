// Here can only be type definitions to be used in components

// Array de numeros: Array<number> == number[]

export interface Sub {
  nick: string
  avatar: string
  subMonth: number
  description?: string
}

export interface Task {
  id: number
  name: string
  description: string
  completed: boolean
}