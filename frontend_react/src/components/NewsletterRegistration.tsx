import { Input } from "./Input.tsx";
import { Button } from "./Button.tsx";
import React, { useState } from "react";

export function NewsletterRegistration() {
  const [email, setEmail] = useState("");

  // todo:
  //   - useSubscribeToNewsletterMutation
  //   - input disabled, während mutation läuft
  //   - save Disabled wenn Mutation läuft, oder Textfeld leer
  //   - LoadingIndicator während Request läuft
  //       <LoadingIndicator secondary placeholder={<img src={logo} />} />
  //   - nach erfolgreichem Speichenr "Subscribed!" zurücksetzen, wenn Taste gedrückt wird

  const handleEmailChange = (e: string) => {
    setEmail(e);
  };

  const handleSubmit = async () => {
    setEmail("");
  };

  return (
    <div
      className={"max-w-1/4 flex items-center space-x-4 pe-2 ps-2 font-barlow"}
    >
      <div>Don't miss new recipes. Subscribe to newsletter</div>
      <div className={"max-w-64"}>
        <Input
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button>
          <button onClick={handleSubmit}>Subscribe</button>
        </Button>
      </div>
      <div>{/* todo: subscribed anzeigen */}</div>
    </div>
  );
}
