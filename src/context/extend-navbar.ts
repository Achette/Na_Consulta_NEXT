/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

type ExtendNavbarType = {
  extendNavbar: boolean
  setExtendNavbar: (arg: boolean) => void
}

export const ContextExtendNavbar = createContext<ExtendNavbarType>({
  extendNavbar: false,
  setExtendNavbar: () => {},
})
