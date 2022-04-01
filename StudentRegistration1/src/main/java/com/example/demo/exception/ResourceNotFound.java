package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//API will return the not found message to the client
@ResponseStatus(value = HttpStatus.NOT_FOUND)
/**
 * @author rushi
 *
 */
public class ResourceNotFound extends RuntimeException {
private static final long serialVersionUID = 1L;
	
	public ResourceNotFound(String message) {
		super(message);
	}
}
