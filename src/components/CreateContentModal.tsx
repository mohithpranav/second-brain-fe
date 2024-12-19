import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputBox";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        type,
        title,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>

          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-center ">
              <span className="bg-white  p-4 rounded">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <CrossIcon />
                </div>
                <div>
                  <Input reference={titleRef} placeholder={"Title"} />
                  <Input reference={linkRef} placeholder={"Link"} />
                  <div>
                    <h1>Type</h1>
                    <div className="flex gap-2 p-4">
                      <Button
                        text="Youtube"
                        variant={
                          type === ContentType.Youtube ? "primary" : "secondary"
                        }
                        onClick={() => setType(ContentType.Youtube)}
                      ></Button>
                      <Button
                        text="Twitter"
                        variant={
                          type === ContentType.Twitter ? "primary" : "secondary"
                        }
                        onClick={() => setType(ContentType.Twitter)}
                      ></Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    variant={"primary"}
                    text={"Submit"}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
