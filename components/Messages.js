import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
const MIN_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, loadingState, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MIN_DURATION)
        ),
    [],
    { live: true }
  );
  console.log(data);

  return (
    <div className="pb-56">
      <div className="my-3">
        <ByMoralis
          style={{ marginLeft: "auto", marginRight: "auto" }}
          variant="dark"
        />
      </div>
      <div className="space-y-10 p-4">
        {/* Render each message */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        {/* Send Message */}
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date {user.getUsername()}👌 </p>
      </div>
    </div>
  );
}

export default Messages;
