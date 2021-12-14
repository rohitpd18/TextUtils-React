import React from "react";

export default function Alert(prop) {
  return (
    <div style={{height: '50px'}}>
{prop.alert && <div className="alert alert-success" role="alert">
      <strong>{prop.alert.type}</strong>: {prop.alert.msg} 
    </div>} 
    </div>
  );
}
