import { CarProps } from '@/types/index';
import React from 'react'

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}
const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
    return (
        <div>CarDetails</div>
    )
}

export default CarDetails