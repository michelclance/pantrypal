import React from 'react'
import Link from 'next/link';

function LandingPage() {
    return (
        <div>
           <h1 className='text-center mt-4'>Pantry Pal</h1>
      <div className="button-container flex justify-end">
        <button className="landing-button p-4">
          Feedback
        </button>
        <button className="landing-button p-4">
          Profile
        </button>
        <button className="landing-button p-4">
          <Link href='Pantry'>Pantry</Link>
        </button>
      </div>
    </div>
    );
  }

  export default LandingPage