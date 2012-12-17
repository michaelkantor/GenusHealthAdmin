
package com.genushealthdb.data;



/**
 *  GenusHealthDB.Feedbackresponses
 *  12/16/2012 16:49:07
 * 
 */
public class Feedbackresponses {

    private Integer feedbackresponseid;
    private String answer;
    private Feedbackquestions feedbackquestions;

    public Integer getFeedbackresponseid() {
        return feedbackresponseid;
    }

    public void setFeedbackresponseid(Integer feedbackresponseid) {
        this.feedbackresponseid = feedbackresponseid;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Feedbackquestions getFeedbackquestions() {
        return feedbackquestions;
    }

    public void setFeedbackquestions(Feedbackquestions feedbackquestions) {
        this.feedbackquestions = feedbackquestions;
    }

}
