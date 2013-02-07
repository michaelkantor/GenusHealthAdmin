
package com.genushealthdb.data;

import java.util.Date;


/**
 *  GenusHealthDB.Jsonfiles
 *  02/04/2013 08:54:09
 * 
 */
public class Jsonfiles {

    private Integer fileId;
    private String text;
    private String name;
    private Date createdAt;
    private Date modifiedAt;

    public Integer getFileId() {
        return fileId;
    }

    public void setFileId(Integer fileId) {
        this.fileId = fileId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

}
