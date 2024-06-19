interface BurguerProps {
  primaryColor?: string;
}

export function BurguerIcon({
  primaryColor = '#fff'
}: BurguerProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5804_357)">
        <rect x="6" y="6" width="16" height="2" rx="1" fill={primaryColor} />
        <rect x="6" y="13" width="16" height="2" rx="1" fill={primaryColor} />
        <rect x="6" y="20" width="16" height="2" rx="1" fill={primaryColor} />
      </g>
      <defs>
        <clipPath id="clip0_5804_357">
          <rect width="16" height="16" fill="white" transform="translate(6 6)" />
        </clipPath>
      </defs>
    </svg>

  )
}