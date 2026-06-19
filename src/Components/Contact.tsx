import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Radio from "./../assets/Radio.json"
import LottieImport from "react-lottie";
import { useState, FormEvent } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit();
const FORM_ID = '7s97rc53yef';

const Lottie = (LottieImport as any).default ?? LottieImport;

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  function handlePhoneChange(value: string) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('0')) {
      digits = digits.slice(1);
    }
    if (digits.length > 9 && digits[0] == "0") {
      setPhoneError('Please enter a valid South African phone number.');
    } else {
      setPhoneError(null);
    }
    setPhoneNumber(digits);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!phoneNumber || phoneNumber[0] == '0') {
      setStatus('error');
      setPhoneError('Please enter a valid South African phone number.');
      setError('Phone number is invalid.');
      return;
    }

    formData.set('fi-sender-phone', `+27${phoneNumber}`);

    const { error } = await forminit.submit(FORM_ID, formData);

    if (error) {
      setStatus('error');
      setError(error.message);
      return;
    }

    setStatus('success');
    form.reset();
    setPhoneNumber("");
    setPhoneError(null);
  }

  return (
    <div className="mt-20">
      <Fade direction="left">
        <h1 className="font-bold text-3xl text-center">
          <span className="border-b-2 border-[#4267B2] px-5 py-3">CONTACT ME </span>
        </h1>
      </Fade>
      <Fade direction="right">
        <p className="text-center mt-5 p-5 md:text-center font-medium text-[#555]">
          Feel welcome to reach out through the form; I'll respond promptly. 🚀
        </p>
      </Fade>
      <Fade direction="down">
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <a href="https://www.linkedin.com/in/bongani-maduma" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://github.com/bonganiglen04" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={30} /></a>
        </div>
      </Fade>
      <div className="mt-10">
        <form onSubmit={handleSubmit} className="space-y-4 pr-5 mb-10 md:flex flex-col justify-center ml-15 mt-5 items-center md:mx-auto">
          <div>
              <input className="border ml-4  border-gray-300 rounded-md py-2 px-4 w-[80%] md:w-full lg:w-80" type="text" placeholder="Name" name="fi-sender-fullName" required />
          </div>
          <div>
              <input className="border  ml-4 border-gray-300 rounded-md py-2 px-4 w-[80%] md:w-full lg:w-80" type="email" name="fi-sender-email" placeholder="Email" required />
          </div>
          <div className="flex flex-col gap-2 ml-4 w-[80%] md:w-full lg:w-80">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center py-2 px-4 rounded-l-md border border-gray-300 bg-gray-100 px-3 text-gray-700">+27</span>
              <input
                className="w-full rounded-r-md border border-l-0 border-gray-300 py-2 px-4"
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                required
              />
            </div>
            {phoneError && (
              <p className="text-red-600 text-sm">{phoneError}</p>
            )}
          </div>
          <div>
              <textarea className="border ml-4 border-gray-300 rounded-md py-2 px-4 w-[80%] md:w-full lg:w-80" placeholder="Message" name="fi-text-message" required></textarea>
          </div>
          <div>
              <button type="submit" disabled={status === 'loading'} className="bg-[#4267B2] w-[60%] md:w-full  ml-4 text-white rounded-md py-2 px-4 i lg:w-80" >{status === 'loading' ? 'Submitting...' : 'Submit'}</button>
              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Message sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-center">
                  {error}
                </p>
              )}
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <Fade direction="left">
          <div className="w-36 md:w-36">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Radio,
              }}
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact