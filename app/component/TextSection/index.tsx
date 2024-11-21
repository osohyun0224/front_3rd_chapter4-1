import React from 'react';

interface TextSectionProps {
  title: string;
  description: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, description }) => (
  <div className="flex flex-col justify-center gap-7 flex-1">
    <div className="text-black text-2xl font-bold">{title}</div>
    <div className="text-gray-800 text-lg">{description}</div>
  </div>
);

export default React.memo(TextSection);