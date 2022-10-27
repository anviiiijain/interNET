import { useNavigate } from "react-router-dom";
import { ReactComponent as Image404 } from "../assets/404.svg";
import { CustomButton } from "../components/shared/CustomButton";
import { ReactComponent as BackIcon } from "../assets/LogoutBlue.svg";

export function Unauthorized() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="text-center pt-16 text-primary">
      <h1 className="font-bold uppercase text-4xl">Unauthorized</h1>
      <Image404 className="mx-auto" />
      <p className="text-xl uppercase font-semibold">
        You do not have access to this page
      </p>
      <div>
        <CustomButton
          appearance="outlined"
          onClick={goBack}
          className="mx-auto my-4"
        >
          <span className="flex gap-2">
            <BackIcon />
            Go Back
          </span>
        </CustomButton>
      </div>
    </section>
  );
}
