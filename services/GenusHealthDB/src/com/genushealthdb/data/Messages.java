
package com.genushealthdb.data;

import java.util.Date;


/**
 *  GenusHealthDB.Messages
 *  12/16/2012 16:48:47
 * 
 */
public class Messages {

    private Integer messageId;
    private String sender;
    private String text;
    private Date createdAt;
    private Integer sessionId;

    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getSessionId() {
        return sessionId;
    }

    public void setSessionId(Integer sessionId) {
        this.sessionId = sessionId;
    }

}