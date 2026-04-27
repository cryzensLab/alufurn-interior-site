import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'agent-standard': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        class?: string;
        // Add any other custom attributes if needed
      };
    }
  }
}
