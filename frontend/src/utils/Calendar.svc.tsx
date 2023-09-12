import { Hygienist } from '@/utils/Calendar.models';

export async function fetchHygienists(): Promise<Hygienist[]> {
  const response = await fetch('http://localhost:8000/hygienists/');
    
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result: Hygienist[] = await response.json();
  return result;
}
