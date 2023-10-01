import { BookingModalProps } from '@/utils/Calendar.models'
import React from 'react'

const BookingModal = ({isOpen, closeModal, hygienist}: BookingModalProps) => {

  if (!isOpen) {
    return null;
}
  return (
    <>
        <div>
            {hygienist.name}
        </div>
       
    </>
    
  )
}

export default BookingModal