/*
 * Ory Kratos
 * Welcome to the ORY Kratos HTTP API documentation!
 *
 * The version of the OpenAPI document: v0.0.0-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package sh.ory.kratos.api;

import sh.ory.kratos.ApiException;
import sh.ory.kratos.model.GenericError;
import sh.ory.kratos.model.LoginRequest;
import sh.ory.kratos.model.ProfileManagementRequest;
import sh.ory.kratos.model.RegistrationRequest;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PublicApi
 */
@Ignore
public class PublicApiTest {

    private final PublicApi api = new PublicApi();

    
    /**
     * Complete Profile Management Flow
     *
     * This endpoint returns a login request&#39;s context with, for example, error details and other information.  For an in-depth look at ORY Krato&#39;s profile management flow, head over to: https://www.ory.sh/docs/kratos/selfservice/profile
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void completeProfileManagementFlowTest() throws ApiException {
        api.completeProfileManagementFlow();

        // TODO: test validations
    }
    
    /**
     * Get Login Request
     *
     * This endpoint returns a login request&#39;s context with, for example, error details and other information.  For an in-depth look at ORY Krato&#39;s login flow, head over to: https://www.ory.sh/docs/kratos/selfservice/login
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getLoginRequestTest() throws ApiException {
        LoginRequest response = api.getLoginRequest();

        // TODO: test validations
    }
    
    /**
     * Get Profile Management Request (via cookie)
     *
     * This endpoint returns a profile management request&#39;s context with, for example, error details and other information.  It can be used from a Single Page Application or other applications running on a client device. The request must be made with valid authentication cookies or it will fail!  If you wish to access this endpoint without the valid cookies (e.g. as part of a server) please call this path at the admin port.  For an in-depth look at ORY Krato&#39;s profile management flow, head over to: https://www.ory.sh/docs/kratos/selfservice/profile
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getProfileManagementRequestTest() throws ApiException {
        String request = null;
        ProfileManagementRequest response = api.getProfileManagementRequest(request);

        // TODO: test validations
    }
    
    /**
     * Get Registration Request
     *
     * This endpoint returns a registration request&#39;s context with, for example, error details and other information.  For an in-depth look at ORY Krato&#39;s registration flow, head over to: https://www.ory.sh/docs/kratos/selfservice/registration
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRegistrationRequestTest() throws ApiException {
        RegistrationRequest response = api.getRegistrationRequest();

        // TODO: test validations
    }
    
    /**
     * Initialize a Login Flow
     *
     * This endpoint initializes a login flow. This endpoint **should not be called from a programatic API** but instead for the, for example, browser. It will redirect the user agent (e.g. browser) to the configured login UI, appending the login challenge.  If the user-agent already has a valid authentication session, the server will respond with a 302 code redirecting to the config value of &#x60;urls.default_return_to&#x60;.  For an in-depth look at ORY Krato&#39;s login flow, head over to: https://www.ory.sh/docs/kratos/selfservice/login
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void initializeLoginFlowTest() throws ApiException {
        api.initializeLoginFlow();

        // TODO: test validations
    }
    
    /**
     * Initialize Profile Management Flow
     *
     * This endpoint initializes a profile update flow. This endpoint **should not be called from a programatic API** but instead for the, for example, browser. It will redirect the user agent (e.g. browser) to the configured login UI, appending the login challenge.  If the user-agent does not have a valid authentication session, a 302 code will be returned which redirects to the initializeLoginFlow endpoint, appending this page as the return_to value.  For an in-depth look at ORY Krato&#39;s profile management flow, head over to: https://www.ory.sh/docs/kratos/selfservice/profile
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void initializeProfileManagementFlowTest() throws ApiException {
        api.initializeProfileManagementFlow();

        // TODO: test validations
    }
    
    /**
     * Initialize a Registration Flow
     *
     * This endpoint initializes a registration flow. This endpoint **should not be called from a programatic API** but instead for the, for example, browser. It will redirect the user agent (e.g. browser) to the configured registration UI, appending the registration challenge.  For an in-depth look at ORY Krato&#39;s registration flow, head over to: https://www.ory.sh/docs/kratos/selfservice/registration
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void initializeRegistrationFlowTest() throws ApiException {
        api.initializeRegistrationFlow();

        // TODO: test validations
    }
    
}
