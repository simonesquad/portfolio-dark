import React, { useState } from "react";

function LinkedIn() {
    const [state, setState] = useState(false);
    let url = "www.linkedin.com/in/simoneaballard";

    return (
        <div>
            <a href={url}>LinkedIn</a>
        </div>
    );
}

export default LinkedIn;