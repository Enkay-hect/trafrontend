import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: false, // default light mode
  }),
  actions: {
    toggle() {
      this.dark = !this.dark
      if (this.dark) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    },
    init() {
      // Optionally load from localStorage
      const saved = localStorage.getItem('darkMode')
      if (saved === 'true') {
        this.dark = true
        document.documentElement.classList.add('dark')
      }
    },
  },
})
