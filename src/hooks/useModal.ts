import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    console.log('close')
    setIsOpen(false)
  }
  return {
    isOpen,
    openModal,
    closeModal,
  }
}
