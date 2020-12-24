import React from "react";

import PublishVideoElement from "./PublishVideoElement";
import PublishSettingsForm from "./PublishSettingsForm";
import Publisher from "./Publisher";

const Publish = () => {
  return (
    <div>
      <PublishVideoElement />
      <PublishSettingsForm />
      <Publisher />
    </div>
  );
};

export default Publish;
