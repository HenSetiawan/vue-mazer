import { defineStore } from 'pinia'

export const sidebarStore = defineStore('sidebar', {
  /* define variable on state here */
  state: () => ({
    isSidebarVisible: true,
    isDropdownVisible: {
      dashboard: false,
    }
  }),
  /* define method on actions here */
  actions: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
      // Simpan state di localStorage
      localStorage.setItem('sidebarState', JSON.stringify(this.$state))
    },
    toggleDropdown(name) {
      for (const key in this.isDropdownVisible) {
        if (key !== name) {
          this.isDropdownVisible[key] = false
        }
      }
      this.isDropdownVisible[name] = !this.isDropdownVisible[name]
      // Simpan state di localStorage
      localStorage.setItem('sidebarState', JSON.stringify(this.$state))
    },
    /* tambahkan method untuk mengambil state dari localStorage saat inisialisasi */
    initializeState() {
      const storedState = localStorage.getItem('sidebarState')
      if (storedState) {
        this.$state = JSON.parse(storedState)
      }
    }
  }
})
