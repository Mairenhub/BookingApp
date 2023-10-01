'use client'
import { useState } from 'react'
import { HygienistCardProps } from '@/utils/Calendar.models'
import Image from 'next/image'
import CustomButton from '@/components/CustomButton'
import BookingModal from './BookingModal'


const HygienistCard: React.FC<HygienistCardProps> = ({ hygienist }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { id, name, description, qualification, price } = hygienist;
  
    return (
      <div className="flex flex-col items-center text-center p-4">
        <Image src="/assets/images/Dental_Hygienist_1.png" alt="icon" width={250} height={200} className="rounded-full mb-4" />
        <div className="text-xl font-semibold mb-2">{name}</div>
        <div className="text-gray-600 mb-4">{description}</div>
        <CustomButton title="Book this professional" handleClick={() => setIsOpen(true)} />
        <BookingModal isOpen={isOpen} closeModal={() => setIsOpen(false)} hygienist={hygienist} />
      </div>
    );
  };
  
  export default HygienistCard;
  
  