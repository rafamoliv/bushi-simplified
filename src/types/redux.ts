// trigger my actions
export type trigger = {
  type: string
}

// export my trigger action
export type action = (trigger: trigger) => void