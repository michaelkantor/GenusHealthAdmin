
package com.genushealthdb.data;



/**
 *  GenusHealthDB.Feedbackresponses
 *  03/22/2013 07:16:09
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
