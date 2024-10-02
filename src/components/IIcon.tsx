import React from 'react';
import { Icon } from '@iconify/react';

interface IconProps {
  icon: string;
  color?: string;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const IIcon: React.FC<IconProps> = ({ icon, color, size, className, style }) => {
  return (
    <Icon
      icon={icon}
      color={color}
      width={size}
      height={size}
      className={className}
      style={style}
    />
  );
};

export default IIcon;
