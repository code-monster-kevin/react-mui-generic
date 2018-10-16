import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function(props) {
  return (
    <SvgIcon viewBox="0 0 60 30" {...props}>
      <defs>
        <linearGradient id="a">
          <stop offset="0" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path d="M.002-.016v30h60v-30z" fill="#00247d" />
      <path
        d="M.002-.016v3.359l23.281 11.64L.002 26.625v3.36h6.725l23.275-11.625 23.275 11.625h6.725v-3.36L36.72 14.984 60 3.343v-3.36h-6.724L30.002 11.61 6.727-.016H.002z"
        fill="#fff"
      />
      <path
        d="M0 2.246l27.742 13.851L0 30h4.48l27.718-13.937L60.004 30v-2.257L32.198 13.858 60.004-.032h-4.626l-27.636 13.86L0-.033z"
        fill="#cf142b"
      />
      <path d="M25.002-.016v10h-25v10h25v10h10v-10h25v-10h-25v-10h-10z" fill="#fff" />
      <path d="M27.002-.016v12h-27v6h27v12h6v-12h27v-6h-27v-12h-6z" fill="#cf142b" />
    </SvgIcon>
  );
}
