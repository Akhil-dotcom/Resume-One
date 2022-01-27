import React from 'react';
import PersonalInfo from '../components/forms/PersonalInfo';

function Editor() {
  return (
    <div className="font-raedex">
        <div>
            <div>Resume builder</div>
            {/* form and preview */}
            <div>
                <PersonalInfo />
            </div>
        </div>
    </div>
  );
}

export default Editor;
