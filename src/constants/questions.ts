import { Gender, Agreement } from "../types/Quizz";
import manEmoji from "../assets/images/man.png";
import womanEmoji from "../assets/images/woman.png";
import crossIcon from "../assets/icons/cross.png";
import checkIcon from "../assets/icons/check.png";
import womanLeft from "../assets/images/woman-left.png";
import manLeft from "../assets/images/man-left.png";
import womanMiddle from "../assets/images/woman-middle.png";
import manMiddle from "../assets/images/man-middle.png";
import womanRight from "../assets/images/woman-right.png";
import manRight from "../assets/images/man-right.png";

export const GENDER_OPTIONS = {
  MAN: "man" as Gender,
  WOMAN: "woman" as Gender,
};

export const AGREEMENT_OPTIONS = {
  YES: "yes" as Agreement,
  NO: "no" as Agreement,
};

export const GENDER_QUESTIONS = [
  {
    id: "gender",
    question: "I am...",
    options: [
      {
        id: "man",
        value: GENDER_OPTIONS.MAN,
        label: "A man",
        icon: manEmoji,
        alt: "man emoji",
      },
      {
        id: "woman",
        value: GENDER_OPTIONS.WOMAN,
        label: "A woman",
        icon: womanEmoji,
        alt: "woman emoji",
      },
    ],
  },
  {
    id: "lookingFor",
    question: "I am looking for...",
    options: [
      {
        id: "lookingForMan",
        value: GENDER_OPTIONS.MAN,
        label: "A man",
        icon: manEmoji,
        alt: "man emoji",
      },
      {
        id: "lookingForWoman",
        value: GENDER_OPTIONS.WOMAN,
        label: "A woman",
        icon: womanEmoji,
        alt: "woman emoji",
      },
    ],
  },
];

export const AGREEMENT_QUESTIONS = {
  [GENDER_OPTIONS.MAN]: {
    question:
      "Do you agree that man should take the initiative to meet a woman?",
    images: [manLeft, manMiddle, manRight],
    options: [
      {
        id: "no",
        value: AGREEMENT_OPTIONS.NO,
        label: "No",
        icon: crossIcon,
        alt: "cross",
      },
      {
        id: "yes",
        value: AGREEMENT_OPTIONS.YES,
        label: "Yes",
        icon: checkIcon,
        alt: "check",
      },
    ],
  },
  [GENDER_OPTIONS.WOMAN]: {
    question:
      "Do you agree to always answer women who take the initiative and contact you?",
    images: [womanLeft, womanMiddle, womanRight],
    options: [
      {
        id: "no",
        value: AGREEMENT_OPTIONS.NO,
        label: "No",
        icon: crossIcon,
        alt: "cross",
      },
      {
        id: "yes",
        value: AGREEMENT_OPTIONS.YES,
        label: "Yes",
        icon: checkIcon,
        alt: "check",
      },
    ],
  },
};

export const RESULTS_QUESTIONS = [
  {
    id: "results1",
    question:
      "Is building a future with a partner who shares your long-term goals essential to you?",
    options: [
      {
        id: "no",
        value: AGREEMENT_OPTIONS.NO,
        label: "No",
        icon: crossIcon,
        alt: "cross",
      },
      {
        id: "yes",
        value: AGREEMENT_OPTIONS.YES,
        label: "Yes",
        icon: checkIcon,
        alt: "check",
      },
    ],
  },
  {
    id: "results2",
    question:
      "Do you prioritize emotional connection and compatibility in your relationships?",
    options: [
      {
        id: "no",
        value: AGREEMENT_OPTIONS.NO,
        label: "No",
        icon: crossIcon,
        alt: "cross",
      },
      {
        id: "yes",
        value: AGREEMENT_OPTIONS.YES,
        label: "Yes",
        icon: checkIcon,
        alt: "check",
      },
    ],
  },
  {
    id: "results3",
    question:
      "Do you believe that a successful relationship requires effort and compromise from both partners?",
    options: [
      {
        id: "no",
        value: AGREEMENT_OPTIONS.NO,
        label: "No",
        icon: crossIcon,
        alt: "cross",
      },
      {
        id: "yes",
        value: AGREEMENT_OPTIONS.YES,
        label: "Yes",
        icon: checkIcon,
        alt: "check",
      },
    ],
  },
];
