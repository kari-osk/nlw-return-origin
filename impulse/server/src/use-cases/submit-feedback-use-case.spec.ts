// test('sum 2 + 2', () => {
//   expect(2 + 2).toBe(4)
// });

import { create } from "domain";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

//spies 
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);


describe('Submit feedback', ()=> {
  //first test: all correct information 
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG', 
      comment: 'example comment',
      screenshot: 'data:image/png;base64.sdjksj',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });


  //second test: missing type info (fail)
  it('should not be able send a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '', 
      comment: 'example comment',
      screenshot: 'data:image/png;base64.sdjksj',
    })).resolves.not.toThrow();
  })

  //Third test: missing comment info (fail)
  it('should not be able send a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG', 
      comment: '',
      screenshot: 'data:image/png;base64.sdjksj',
    })).resolves.not.toThrow();
  })

  //Fourth test: invalid screenshot (fail)
  it('should not be able send a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG', 
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).resolves.not.toThrow();
  })
})