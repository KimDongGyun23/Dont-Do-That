import { create } from 'zustand'

interface Actions {
  setToken: (newToken: string) => void
}

interface TokenStore {
  token: string | null
  actions: Actions
}

export const useTokenStore = create<TokenStore>((set) => ({
  token: null,
  actions: {
    setToken: (newToken) => set(() => ({ token: newToken })),
  },
}))

export const useToken = () => useTokenStore((state) => state.token)
export const useTokenActions = () => useTokenStore((state) => state.actions)
